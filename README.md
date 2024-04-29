# Next.js does not work with cascade layers

The problem is that any components loaded in `app/layout` that contain CSS will have their CSS bundled _before_ the global CSS imported in `app/layout`. This means that if any of the bundled CSS uses Cascade Layers (`@layer`), then the layers will be defined in the wrong order.

In this demo, the expected cascade layers are defined in `global.css`:

```css
@layer test {
  @layer reset;
  @layer base;
  @layer components;
  @layer utils;
}
```

So styles in `@layer test.utils` should always have precendence over `@layer test.components`. However, because the CSS in `app/layout` is bundled _before_ the global CSS, the cascade layers are defined like `@layer test.utils` _and then_ `@layer test.components`, resulting in the wrong order.

## Test

Test PASSES if the text is blue.
Test FAILS if the text is red.
