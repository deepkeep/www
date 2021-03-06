
var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans:700,300,800,400' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet' type='text/css' />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" rel="stylesheet" />
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
          <link href="/static/styles.css" rel="stylesheet" />
          <title>deepkeep</title>
        </head>
        <body>
          <div id="main" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
          <script src="https://cdn.auth0.com/js/lock-7.5.min.js"></script>
          <script src="/static/bundle.js" />
          <script dangerouslySetInnerHTML={{__html: this.props.script}}></script>
          <script dangerouslySetInnerHTML={{__html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-65047638-1', 'auto');
            ga('send', 'pageview');
`}} />
        </body>
      </html>);
  }
});

module.exports = Html;
