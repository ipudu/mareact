---
title: Divider
---

# Divider

## Default Divider

```tsx
import React from 'react';
import { Divider } from 'mareact';

export default () => <Divider />;
```

## Colorful Dividers

```tsx
import React from 'react';
import { Divider } from 'mareact';

export default () => (
  <>
    <Divider color="primary" />
    <div style={{ margin: '2rem' }} />
    <Divider color="secondary" />
    <div style={{ margin: '2rem' }} />
    <Divider color="success" />
    <div style={{ margin: '2rem' }} />
    <Divider color="danger" />
    <div style={{ margin: '2rem' }} />
    <Divider color="warning" />
    <div style={{ margin: '2rem' }} />
    <Divider color="info" />
  </>
);
```

## Variant Dividers

```tsx
import React from 'react';
import { Divider } from 'mareact';

export default () => (
  <>
    <Divider variant="solid" color="primary" />
    <div style={{ margin: '2rem' }} />
    <Divider variant="dotted" color="primary" />
    <div style={{ margin: '2rem' }} />
    <Divider variant="dashed" color="primary" />
  </>
);
```

<API src="../../src/Divider/index.tsx"></API>
