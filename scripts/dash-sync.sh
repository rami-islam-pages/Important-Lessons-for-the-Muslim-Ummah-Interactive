#!/bin/bash
# Dashboard Sync Script
# Sends heartbeat and event updates to the a2-ozoll-dashboard

# Configuration
DASHBOARD_URL="${DASHBOARD_URL:-http://localhost:3000}"
DASHBOARD_API="${DASHBOARD_URL}/api/view"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to send heartbeat
send_heartbeat() {
    local status="$1"  # idle, busy, processing
    local message="${2:-}"
    
    if [ -z "$status" ]; then
        echo -e "${RED}Error: Status is required for heartbeat${NC}"
        echo "Usage: $0 heartbeat <status> [message]"
        echo "Status: idle, busy, processing"
        return 1
    fi
    
    local payload="{\"status\":\"${status}\""
    if [ -n "$message" ]; then
        payload="${payload},\"message\":\"${message}\""
    fi
    payload="${payload}}"
    
    echo -e "${YELLOW}Sending heartbeat: ${status}${NC}"
    
    # Send heartbeat to dashboard
    curl -s -X POST \
        -H "Content-Type: application/json" \
        -d "${payload}" \
        "${DASHBOARD_API}/heartbeat" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Heartbeat sent${NC}"
    else
        echo -e "${RED}✗ Failed to send heartbeat (dashboard may be offline)${NC}"
    fi
}

# Function to send event
send_event() {
    local type="$1"      # info, action, warning, error
    local actor="$2"     # who did it (e.g., "Rami", "A2", "System")
    local message="$3"   # what happened
    local category="${4:-general}"  # chat, code, build, test, deploy, etc.
    
    if [ -z "$type" ] || [ -z "$actor" ] || [ -z "$message" ]; then
        echo -e "${RED}Error: Type, actor, and message are required for event${NC}"
        echo "Usage: $0 event <type> <actor> <message> [category]"
        echo "Type: info, action, warning, error"
        echo "Category: chat, code, build, test, deploy, general"
        return 1
    fi
    
    local payload="{\"type\":\"${type}\",\"actor\":\"${actor}\",\"message\":\"${message}\",\"category\":\"${category}\"}"
    
    echo -e "${YELLOW}Sending event: [${type}] ${actor}: ${message}${NC}"
    
    # Send event to dashboard
    curl -s -X POST \
        -H "Content-Type: application/json" \
        -d "${payload}" \
        "${DASHBOARD_API}/event" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Event sent${NC}"
    else
        echo -e "${RED}✗ Failed to send event (dashboard may be offline)${NC}"
    fi
}

# Function to enable fullscreen
enable_fullscreen() {
    echo -e "${YELLOW}Enabling fullscreen mode${NC}"
    
    curl -s -X POST "${DASHBOARD_API}/fullscreen/enable" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Fullscreen enabled${NC}"
    else
        echo -e "${RED}✗ Failed to enable fullscreen${NC}"
    fi
}

# Function to disable fullscreen
disable_fullscreen() {
    echo -e "${YELLOW}Disabling fullscreen mode${NC}"
    
    curl -s -X POST "${DASHBOARD_API}/fullscreen/disable" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Fullscreen disabled${NC}"
    else
        echo -e "${RED}✗ Failed to disable fullscreen${NC}"
    fi
}

# Main command dispatcher
case "$1" in
    heartbeat)
        send_heartbeat "$2" "$3"
        ;;
    event)
        send_event "$2" "$3" "$4" "$5"
        ;;
    fullscreen-enable)
        enable_fullscreen
        ;;
    fullscreen-disable)
        disable_fullscreen
        ;;
    help|--help|-h)
        echo "Dashboard Sync Script"
        echo ""
        echo "Usage:"
        echo "  $0 heartbeat <status> [message]"
        echo "    Send heartbeat update (status: idle, busy, processing)"
        echo ""
        echo "  $0 event <type> <actor> <message> [category]"
        echo "    Send event to activity feed"
        echo "    Type: info, action, warning, error"
        echo "    Category: chat, code, build, test, deploy, general"
        echo ""
        echo "  $0 fullscreen-enable"
        echo "    Enable fullscreen mode on dashboard"
        echo ""
        echo "  $0 fullscreen-disable"
        echo "    Disable fullscreen mode on dashboard"
        echo ""
        echo "Examples:"
        echo "  $0 heartbeat busy \"Processing request\""
        echo "  $0 event info \"Rami\" \"Asked about lesson 5\" \"chat\""
        echo "  $0 event action \"A2\" \"Updated documentation\" \"code\""
        echo "  $0 heartbeat idle"
        echo ""
        echo "Environment Variables:"
        echo "  DASHBOARD_URL - Dashboard URL (default: http://localhost:3000)"
        ;;
    *)
        echo -e "${RED}Error: Unknown command '$1'${NC}"
        echo "Run '$0 help' for usage information"
        exit 1
        ;;
esac
