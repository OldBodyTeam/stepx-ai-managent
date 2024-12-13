#!/bin/bash
set -e

pnpm run build

pm2 reload 0
