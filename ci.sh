#!/bin/sh
set -eu
case "${CI_MATRIX_FLAVOR:-}" in
  alpha|beta) ;;
  *) printf '%s\n' 'Expected a configured matrix flavor' >&2; exit 2 ;;
esac
printf 'matrix-proof flavor=%s\n' "$CI_MATRIX_FLAVOR"
