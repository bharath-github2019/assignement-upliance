[build]
  command = "npm run build"
  publish = "dist"

  [build.rollup]
    external = [
      "@mui/material/styles/index.js",
      "@mui/material/utils/index.js",
      "@mui/material/Alert/index.js"
      # add other problematic MUI modules here as needed
    ]

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
