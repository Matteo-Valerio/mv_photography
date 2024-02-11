---
title: "Matteo Valerio"
description: "PHOTOGRAPHY"
paige:
    style: |
        #paige-title {  
            font-size: 4rem;    
            font-family: Hind, sans-serif;
            padding-top: 2rem;
        }
        #paige-description {
            font-size: rem;
            font-family: Hind, sans-serif;
            padding-bottom: 1rem;
        } 
authors: ["matteo-valerio"] 
---

<p>
{{% paige/image alt="Landscape" 
    breakpoints=true class="object-fit-cover rounded-3" 
    fetchpriority="high" height="22rem" loading="eager" process="webp" 
    src="./img.jpg" width="100%" %}}
</p>

<br>

<div id="mobileContent">
    {{< carousel items="4" height="20" unit="%" duration="3000" >}}
</div>

<div id="desktopContent">
    {{< glide >}}
</div>

<br>

<div class="column-gap-3 d-flex display-6 justify-content-center mb-3">
    {{< paige/icon class="fa-brands fa-flickr" title="Flickr" url="https://www.flickr.com/photos/199805932@N03/" >}}
    {{< paige/icon class="fa-brands fa-500px" title="500px" url="https://500px.com/p/matteovalerio" >}}    
    {{< paige/icon class="bi bi-instagram" title="Instagram" url="https://www.instagram.com/_matteo.valerio_/" >}}
</div>

