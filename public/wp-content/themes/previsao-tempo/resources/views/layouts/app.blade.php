@include('sections.header')

  <main id="main" class="main md:flex max-w-screen-2xl mx-auto overflow-x-hidden lg:h-screen">
    <body>
      @yield('content')

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"></script>
    </body>
  </main>

@include('sections.footer')
