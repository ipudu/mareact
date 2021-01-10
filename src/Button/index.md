---
title: Button
nav:
  title: Components
  path: /components
---

# Button

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

### Default Button

```tsx
import React from 'react';
import { Button } from 'mareact';

export default () => <Button>default</Button>;
```

### Contained Buttons

```tsx
import React from 'react';
import { Button } from 'mareact';

export default () => (
  <>
    <Button variant="contained" color="primary">
      Primary
    </Button>{' '}
    <Button variant="contained" color="secondary">
      Secondary
    </Button>{' '}
    <Button variant="contained" color="success">
      Success
    </Button>{' '}
    <Button variant="contained" color="danger">
      Danger
    </Button>{' '}
    <Button variant="contained" color="warning">
      Warning
    </Button>{' '}
    <Button variant="contained" color="info">
      Info
    </Button>{' '}
    <Button variant="contained" color="light">
      Light
    </Button>{' '}
    <Button variant="contained" color="dark">
      Dark
    </Button>{' '}
    <Button variant="contained" disabled>
      Disabled
    </Button>{' '}
  </>
);
```

### Outline Buttons

```tsx
import React from 'react';
import { Button } from 'mareact';

export default () => (
  <>
    <Button variant="outlined" color="primary">
      Primary
    </Button>{' '}
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>{' '}
    <Button variant="outlined" color="success">
      Success
    </Button>{' '}
    <Button variant="outlined" color="danger">
      Danger
    </Button>{' '}
    <Button variant="outlined" color="warning">
      Warning
    </Button>{' '}
    <Button variant="outlined" color="info">
      Info
    </Button>{' '}
    <Button variant="outlined" color="light">
      Light
    </Button>{' '}
    <Button variant="outlined" color="dark">
      Dark
    </Button>{' '}
    <Button variant="outlined" disabled>
      Disabled
    </Button>{' '}
  </>
);
```

### Text Buttons

```tsx
import React from 'react';
import { Button } from 'mareact';

export default () => (
  <>
    <Button variant="text" color="primary">
      Primary
    </Button>{' '}
    <Button variant="text" color="secondary">
      Secondary
    </Button>{' '}
    <Button variant="text" color="success">
      Success
    </Button>{' '}
    <Button variant="text" color="danger">
      Danger
    </Button>{' '}
    <Button variant="text" color="warning">
      Warning
    </Button>{' '}
    <Button variant="text" color="info">
      Info
    </Button>{' '}
    <Button variant="text" color="light">
      Light
    </Button>{' '}
    <Button variant="text" color="dark">
      Dark
    </Button>{' '}
    <Button variant="text" disabled>
      Disabled
    </Button>{' '}
  </>
);
```

### Sizes

```tsx
import React from 'react';
import { Button } from 'mareact';

export default () => (
  <div>
    <Button variant="contained" size="small">
      small
    </Button>{' '}
    <Button variant="contained" size="medium">
      medium
    </Button>{' '}
    <Button variant="contained" size="large">
      large
    </Button>{' '}
    <Button variant="outlined" size="small">
      small
    </Button>{' '}
    <Button variant="outlined" size="medium">
      medium
    </Button>{' '}
    <Button variant="outlined" size="large">
      large
    </Button>{' '}
    <Button variant="text" size="small">
      small
    </Button>{' '}
    <Button variant="text" size="medium">
      medium
    </Button>{' '}
    <Button variant="text" size="large">
      large
    </Button>{' '}
  </div>
);
```

<API></API>
