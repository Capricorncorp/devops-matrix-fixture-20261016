# Disposable DevOps Matrix Acceptance Fixture

Two flavor variants run serially on one isolated Capricorncorp Cloud runner.
Commit ec235836 is the accepted build-only matrix fixture. The later guide-view
revision also publishes a small Node image and deploys one disposable application
with a 0.25 CPU / 128M limit for current-interface Logs, Tasks and policy screenshots.
The application is removed after capture; source and acceptance history remain.
