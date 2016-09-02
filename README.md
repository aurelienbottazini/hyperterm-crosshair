
# hyperterm-crosshair

Extension for crosshair—vertical and horizontal line highlight—in hyperterm

![Image of hyperterm-crosshair](screenshot.png)

## How to use

Install [HyperTerm](https://hyperterm.org) and add `hyperterm-crosshair`
to `plugins` in `~/.hyperterm.js`.

You can also add a key to the config object in `hyperterm.js`
to control the color of the highlight.


```
config: {

  // some settings

  // hyperterm-crosshair settings
  hypertermCrosshair: {
    // You can use any valid CSS color string
    color: 'rgba(119, 172, 217, 0.2)',
  }
}
```

## License

MIT
