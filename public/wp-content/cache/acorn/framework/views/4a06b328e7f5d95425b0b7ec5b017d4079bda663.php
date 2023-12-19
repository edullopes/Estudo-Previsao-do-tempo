<?php echo $__env->make('sections.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <main id="main" class="main md:flex max-w-screen-2xl mx-auto overflow-x-hidden lg:h-screen">
    <body>
      <?php echo $__env->yieldContent('content'); ?>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"></script>
    </body>
  </main>

<?php echo $__env->make('sections.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php /**PATH /var/www/html/wp-content/themes/previsao-tempo/resources/views/layouts/app.blade.php ENDPATH**/ ?>