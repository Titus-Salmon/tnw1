<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <div class="flexbox">
      <div>
        <li>
          <a
            aria-current="{segment === undefined ? 'page' : undefined}"
            href=".">home</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'about' ? 'page' : undefined}"
            href="about">about</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'products' ? 'page' : undefined}"
            href="/pages/products">products</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'categories' ? 'page' : undefined}"
            href="/pages/categories">categories</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'users' ? 'page' : undefined}"
            href="/pages/users">users</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'specials' ? 'page' : undefined}"
            href="specials">specials</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'account' ? 'page' : undefined}"
            href="account">account</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'cart' ? 'page' : undefined}"
            href="cart">cart</a>
        </li>
      </div>
      <div>
        <li>
          <a
            aria-current="{segment === 'search' ? 'page' : undefined}"
            href="search">search</a>
        </li>
      </div>
      <div>
        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
           the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
          <a
            rel="prefetch"
            aria-current="{segment === 'blog' ? 'page' : undefined}"
            href="blog">blog</a>
        </li>
      </div>
    </div>
  </ul>
</nav>
