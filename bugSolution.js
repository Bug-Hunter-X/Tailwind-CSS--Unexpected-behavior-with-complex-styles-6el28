```javascript
// my-component.js
<div className="bg-gray-100 p-4 relative">
  <h1 className="text-3xl font-bold absolute top-0 left-0">
    My Component
  </h1>
  <p className="text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    This is a simple component.
  </p>
</div>
```

**Explanation:**

The solution uses `absolute` positioning and transforms to precisely place the heading and paragraph.  This avoids specificity issues that might arise with nested classes.  Adding `relative` to the parent container is crucial for proper absolute positioning. Carefully managing the order and specificity of your Tailwind classes is key to avoiding such problems.