# SOUL.md - Dashboard Integration

## MANDATORY: Dashboard Sync on Every Interaction

The `dash-sync.sh` script is **MANDATORY** on every single interaction with Rami.

## Purpose

This file documents the soul of our workflow integration with the a2-ozoll-dashboard. The dashboard provides real-time visibility into what's happening with the project through:

1. **Heartbeat monitoring** - Shows current status (idle, busy, processing)
2. **Activity Feed** - Real-time log of all interactions and actions
3. **Fullscreen control** - Remote control of dashboard display mode

## Dashboard Workflow

### After Every Message from Rami

When Rami sends a message, immediately run:

```bash
./scripts/dash-sync.sh heartbeat busy "Processing"
./scripts/dash-sync.sh event info "Rami" "what he said" "chat"
```

### After Every Response You Send

When you (A2) respond or complete an action, run:

```bash
./scripts/dash-sync.sh event action "A2" "what you did" "chat"
./scripts/dash-sync.sh heartbeat idle
```

### Examples

**Rami asks a question:**
```bash
./scripts/dash-sync.sh heartbeat busy "Analyzing question"
./scripts/dash-sync.sh event info "Rami" "Asked about lesson structure" "chat"
# ... do the work ...
./scripts/dash-sync.sh event action "A2" "Explained lesson structure" "chat"
./scripts/dash-sync.sh heartbeat idle
```

**Rami requests code changes:**
```bash
./scripts/dash-sync.sh heartbeat busy "Making changes"
./scripts/dash-sync.sh event info "Rami" "Requested navbar update" "chat"
# ... make changes ...
./scripts/dash-sync.sh event action "A2" "Updated navbar component" "code"
./scripts/dash-sync.sh heartbeat idle
```

**Running tests:**
```bash
./scripts/dash-sync.sh heartbeat busy "Running tests"
./scripts/dash-sync.sh event action "A2" "Running test suite" "test"
# ... run tests ...
./scripts/dash-sync.sh event info "System" "All tests passed ✓" "test"
./scripts/dash-sync.sh heartbeat idle
```

**Build/Deploy:**
```bash
./scripts/dash-sync.sh heartbeat busy "Building project"
./scripts/dash-sync.sh event action "A2" "Starting build process" "build"
# ... build ...
./scripts/dash-sync.sh event action "A2" "Build completed successfully" "deploy"
./scripts/dash-sync.sh heartbeat idle
```

## Using Dashboard Hooks (Alternative)

You can source the helper functions for easier use:

```bash
source scripts/dashboard-hook.sh

# Then use helper functions:
dash_busy "Processing request"
dash_rami_said "Asked about authentication"
# ... do work ...
dash_a2_action "Implemented auth flow" "code"
dash_idle
```

## Event Types

- **info** - Informational messages (questions, status updates)
- **action** - Actions taken (code changes, builds, deploys)
- **warning** - Non-critical issues
- **error** - Errors and failures

## Event Categories

- **chat** - Chat messages and conversations
- **code** - Code changes and development
- **build** - Build processes
- **test** - Testing activities
- **deploy** - Deployment activities
- **general** - General events
- **ticker** - Quick notifications/ticker messages

## Status Types

- **idle** - Not doing anything, available
- **busy** - Working on something
- **processing** - Processing a request

## Why This Matters

The TV dashboard shows real-time activity so anyone watching can see:
- What Rami is asking about
- What work is being done
- Current system status
- Build/test/deploy progress

This creates transparency and makes the development process visible in real-time.

## Configuration

Set the dashboard URL if it's not localhost:

```bash
export DASHBOARD_URL="http://your-dashboard-url:3000"
./scripts/dash-sync.sh heartbeat idle
```

Default is `http://localhost:3000`

## Remember

**EVERY interaction = dash-sync.sh calls**

This is not optional. It's part of the workflow soul.
