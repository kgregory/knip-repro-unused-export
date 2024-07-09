# Reproduction

- The `@example/app_common.ui` package exports `BarcodeScannerIcon`.
- The `@example/app.repro` package is a React app that imports and renders `BarcodeScannerIcon`.
- `BarcodeScannerIcon` is reported as unused.

After cloning:

- `pnpm install`
- `pnpm run lint_unused`

```
Unused exports (1)
BarcodeScannerIcon  unknown  apps/app_common/ui/src/icons/BarcodeScannerIcon.tsx:5:14
```
