---
title: "La mia pagina con la galleria"
date: 2024-01-05
description: "Una pagina con una galleria di immagini"
---

<p class="display-5 fw-bold h2 text-center">An advanced Hugo theme</p>

<div class="container-fluid">
    <div class="justify-content-center row">
        <div class="col col-auto col-lg-7 px-0">
            <p class="lead text-center">Paige is designed to put your content front and center, avoiding the typical clutter. The look is seamless and smooth, scalable and readable, portable and efficient. The layout is minimal and responsive, using verticality and white space to focus and delineate parts of the page. The implementation is flexible and extensible. It’s a versatile canvas that serves most web needs.</p>
        </div>
    </div>
</div>

<p class="text-center">
    <a class="lead" href="https://github.com/willfaught/paige">Install it now.</a>
</p>

<div class="column-gap-3 d-flex display-6 justify-content-center mb-3">
    {{< paige/icon class="bi bi-github" title="GitHub" url="https://github.com/willfaught/paige" >}}
</div>

{{< gallery match="images/*" sortOrder="desc" rowHeight="100" margins="10" thumbnailResizeOptions="600x600 q90 Lanczos" showExif=true previewType="blur" embedPreview=true loadJQuery=true >}}

