# HEARTBEAT.md - Dashboard Heartbeat Integration

## Overview

The heartbeat system sends regular status updates to the a2-ozoll-dashboard, showing the current state of the AI assistant (A2) and the system.

## What is a Heartbeat?

A heartbeat is a simple status ping that tells the dashboard:
- Current status (idle, busy, processing)
- Optional message about what's happening
- Timestamp of the update

## When to Send Heartbeats

### On Every Check/Interaction

Send a heartbeat ping on every check or interaction:

**Start of interaction:**
```bash
./scripts/dash-sync.sh heartbeat busy "Processing request"
```

**End of interaction:**
```bash
./scripts/dash-sync.sh heartbeat idle
```

### During Long Operations

For long-running operations, update the heartbeat with progress:

```bash
./scripts/dash-sync.sh heartbeat busy "Running tests (1/10)"
# ... some tests complete ...
./scripts/dash-sync.sh heartbeat busy "Running tests (5/10)"
# ... more tests ...
./scripts/dash-sync.sh heartbeat busy "Running tests (10/10)"
./scripts/dash-sync.sh heartbeat idle
```

## Heartbeat Status Values

### `idle`
- System is available and waiting
- No active work in progress
- Ready for new requests

```bash
./scripts/dash-sync.sh heartbeat idle
```

### `busy`
- System is actively working
- Processing a request
- May take some time

```bash
./scripts/dash-sync.sh heartbeat busy "Building project"
```

### `processing`
- System is processing/thinking
- Analyzing or computing
- Not yet taking action

```bash
./scripts/dash-sync.sh heartbeat processing "Analyzing codebase"
```

## Heartbeat with Messages

Always include a message when the status is `busy` or `processing` to show what's happening:

```bash
# Good - informative
./scripts/dash-sync.sh heartbeat busy "Installing dependencies"
./scripts/dash-sync.sh heartbeat busy "Running ESLint"
./scripts/dash-sync.sh heartbeat processing "Generating test cases"

# Bad - not informative
./scripts/dash-sync.sh heartbeat busy
```

For `idle` status, the message is optional:

```bash
# Both are fine
./scripts/dash-sync.sh heartbeat idle
./scripts/dash-sync.sh heartbeat idle "Ready for next task"
```

## Integration with Activity Feed

Heartbeats complement the activity feed:

- **Heartbeat** = Current status (what's happening NOW)
- **Event** = Action log (what HAPPENED)

Example workflow:
```bash
# Rami asks a question
./scripts/dash-sync.sh heartbeat busy "Thinking"
./scripts/dash-sync.sh event info "Rami" "How do I add a new lesson?" "chat"

# A2 processes and responds
./scripts/dash-sync.sh heartbeat busy "Preparing response"
./scripts/dash-sync.sh event action "A2" "Explained lesson creation process" "chat"

# Done
./scripts/dash-sync.sh heartbeat idle
```

## Automatic Heartbeat Monitoring

The dashboard monitors heartbeats and can detect:
- When the system is unresponsive (no heartbeat for X seconds)
- When the system is stuck (same busy message for too long)
- When the system goes from busy to idle (task completion)

## Best Practices

### 1. Always Close with Idle
Every busy/processing heartbeat should eventually end with idle:
```bash
dash_busy "Working on task"
# ... do work ...
dash_idle  # IMPORTANT: Don't forget this!
```

### 2. Update Long Operations
For operations over 30 seconds, send periodic updates:
```bash
dash_busy "Running test suite (0%)"
# ... 25% done ...
dash_busy "Running test suite (25%)"
# ... 50% done ...
dash_busy "Running test suite (50%)"
# ... complete ...
dash_idle
```

### 3. Be Specific
Use specific messages that explain what's happening:
```bash
# Good
dash_busy "Compiling TypeScript files"
dash_busy "Fetching data from API"
dash_busy "Generating documentation"

# Bad (too vague)
dash_busy "Working"
dash_busy "Please wait"
```

### 4. Pair with Events
Heartbeats show status, events show actions:
```bash
# Status update
dash_busy "Running build"

# Action log
dash_event action "A2" "Build started" "build"

# ... build completes ...

# Action log
dash_event info "System" "Build completed successfully" "build"

# Status update
dash_idle
```

## Using Dashboard Hooks

For convenience, use the helper functions:

```bash
source scripts/dashboard-hook.sh

# Simple helpers
dash_busy "Processing"
dash_idle

# Or use explicit heartbeat function
dash_heartbeat busy "Detailed message"
dash_heartbeat idle
```

## Dashboard Display

The dashboard shows heartbeat status as:
- **Status indicator** (colored dot: green=idle, yellow=processing, red=busy)
- **Current message** (what the system is doing)
- **Time since last heartbeat** (freshness indicator)

## Error Handling

If the dashboard is offline, heartbeat calls will fail silently and won't block your workflow. The script will show a warning but continue:

```bash
./scripts/dash-sync.sh heartbeat busy "Working"
# Output: ✗ Failed to send heartbeat (dashboard may be offline)
# Your script continues normally
```

## Summary

**Remember:** Heartbeat on every interaction
- **Start:** `dash_busy "message"`
- **Work:** Do the task
- **End:** `dash_idle`

This keeps the dashboard in sync and provides real-time visibility into system activity.
