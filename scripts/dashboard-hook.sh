#!/bin/bash
# Dashboard Hook - Helper Functions
# Source this file to get dashboard helper functions
# Usage: source scripts/dashboard-hook.sh

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DASH_SYNC="${SCRIPT_DIR}/dash-sync.sh"

# Check if dash-sync.sh exists
if [ ! -f "${DASH_SYNC}" ]; then
    echo "Error: dash-sync.sh not found at ${DASH_SYNC}"
    return 1
fi

# Make sure dash-sync.sh is executable
chmod +x "${DASH_SYNC}"

# Helper function: Send heartbeat
dash_heartbeat() {
    local status="$1"
    local message="${2:-}"
    "${DASH_SYNC}" heartbeat "${status}" "${message}"
}

# Helper function: Send event
dash_event() {
    local type="$1"
    local actor="$2"
    local message="$3"
    local category="${4:-general}"
    "${DASH_SYNC}" event "${type}" "${actor}" "${message}" "${category}"
}

# Helper function: Send ticker/notification
dash_ticker() {
    local message="$1"
    local actor="${2:-System}"
    "${DASH_SYNC}" event info "${actor}" "${message}" "ticker"
}

# Helper function: Mark as busy
dash_busy() {
    local message="${1:-Processing}"
    dash_heartbeat busy "${message}"
}

# Helper function: Mark as idle
dash_idle() {
    dash_heartbeat idle
}

# Helper function: Log chat message from Rami
dash_rami_said() {
    local message="$1"
    dash_event info "Rami" "${message}" "chat"
}

# Helper function: Log action by A2
dash_a2_action() {
    local message="$1"
    local category="${2:-code}"
    dash_event action "A2" "${message}" "${category}"
}

# Helper function: Log error
dash_error() {
    local message="$1"
    local actor="${2:-System}"
    dash_event error "${actor}" "${message}" "error"
}

# Helper function: Log warning
dash_warning() {
    local message="$1"
    local actor="${2:-System}"
    dash_event warning "${actor}" "${message}" "warning"
}

# Helper function: Enable fullscreen
dash_fullscreen_on() {
    "${DASH_SYNC}" fullscreen-enable
}

# Helper function: Disable fullscreen
dash_fullscreen_off() {
    "${DASH_SYNC}" fullscreen-disable
}

# Export functions so they're available in subshells
export -f dash_heartbeat
export -f dash_event
export -f dash_ticker
export -f dash_busy
export -f dash_idle
export -f dash_rami_said
export -f dash_a2_action
export -f dash_error
export -f dash_warning
export -f dash_fullscreen_on
export -f dash_fullscreen_off

echo "Dashboard hooks loaded. Available functions:"
echo "  dash_heartbeat <status> [message]"
echo "  dash_event <type> <actor> <message> [category]"
echo "  dash_ticker <message> [actor]"
echo "  dash_busy [message]"
echo "  dash_idle"
echo "  dash_rami_said <message>"
echo "  dash_a2_action <message> [category]"
echo "  dash_error <message> [actor]"
echo "  dash_warning <message> [actor]"
echo "  dash_fullscreen_on"
echo "  dash_fullscreen_off"
