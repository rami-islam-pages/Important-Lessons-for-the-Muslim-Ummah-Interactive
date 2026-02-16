# Scripts Directory

This directory contains utility scripts for the Important Lessons project.

## Available Scripts

### `convert-lessons.js`
Converts lesson HTML files to JSX content components for the Next.js application.

**Usage:**
```bash
node scripts/convert-lessons.js
```

Reads from `/lessons/*.html` and writes to `/src/content/lessons/*.tsx`.

---

### `dash-sync.sh`
Dashboard synchronization script for sending heartbeats and events to the a2-ozoll-dashboard.

**Usage:**
```bash
# Send heartbeat
./scripts/dash-sync.sh heartbeat <status> [message]

# Send event
./scripts/dash-sync.sh event <type> <actor> <message> [category]

# Control fullscreen
./scripts/dash-sync.sh fullscreen-enable
./scripts/dash-sync.sh fullscreen-disable

# Show help
./scripts/dash-sync.sh help
```

**Examples:**
```bash
# Mark as busy
./scripts/dash-sync.sh heartbeat busy "Processing request"

# Log an event
./scripts/dash-sync.sh event info "Rami" "Asked about lesson 5" "chat"

# Mark as idle
./scripts/dash-sync.sh heartbeat idle
```

**Configuration:**
Set `DASHBOARD_URL` environment variable to point to your dashboard (default: `http://localhost:3000`).

---

### `dashboard-hook.sh`
Helper functions for easier dashboard interaction. Source this file to load convenience functions.

**Usage:**
```bash
# Load the hooks
source scripts/dashboard-hook.sh

# Use helper functions
dash_busy "Working on task"
dash_rami_said "Asked a question"
dash_a2_action "Completed the task" "code"
dash_idle
```

**Available Functions:**
- `dash_heartbeat <status> [message]` - Send heartbeat
- `dash_event <type> <actor> <message> [category]` - Send event
- `dash_ticker <message> [actor]` - Send ticker notification
- `dash_busy [message]` - Mark as busy
- `dash_idle` - Mark as idle
- `dash_rami_said <message>` - Log message from Rami
- `dash_a2_action <message> [category]` - Log action by A2
- `dash_error <message> [actor]` - Log error
- `dash_warning <message> [actor]` - Log warning
- `dash_fullscreen_on` - Enable fullscreen
- `dash_fullscreen_off` - Disable fullscreen

---

## Dashboard Integration

See [SOUL.md](../SOUL.md) and [HEARTBEAT.md](../HEARTBEAT.md) for complete documentation on dashboard integration workflow.

**Quick Reference:**

After every message from Rami:
```bash
./scripts/dash-sync.sh heartbeat busy "Processing"
./scripts/dash-sync.sh event info "Rami" "what he said" "chat"
```

After every response you send:
```bash
./scripts/dash-sync.sh event action "A2" "what you did" "chat"
./scripts/dash-sync.sh heartbeat idle
```
