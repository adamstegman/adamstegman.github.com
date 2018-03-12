webpackJsonp([3677183312930],{419:function(e,a){e.exports={data:{markdownRemark:{html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.04558737580363%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAC4jAAAuIwF4pT92AAABhklEQVQoz2NgwAPWdCgzoot92y/CQDL4/9+U4fgcebBhrzerm37eLznn+wGR/g/7JJVBYp/2izN+2C9FvIFr2zXBdHu+FuehqZpzrq5TO/Vgv8ap13tlA0HiL/YpML3ZJ0O8gSqysswgWlVVLVSJi+cJl23iZYal308y9P2XBiuY/4kRp2ZleQUwRmaLu7mANcjY2Crxx4bulG9pOaC9/eh+8+0bHUHi+hu3MZqXZwPVykP0yEH1Q2kGJYgE3FY5A30mrbgoCH/j4ljjvWsvuxxYc8Ju1yqwgaZ1xUzKysqMMD1KcvJgw6GGKcBdC5TgUEbiK3LzsxAKHqBBPMi+hQmyATmWynLyvkC2MdASO6DhlkCxAEVlZVsFSWl1oJyFsoqKNVDcBChuBcVGQL4PiI1qi5w8NxAnKskpeAMlE6A4DKjYG2h4mLKCojGQHwPEKUCxECBdCAwvJyDtDHSANdgyOXlWePghA6ABzNDABoURMzR8WWHeAQUR0FAmqM+YgPLMyOYAAFn7ZSMwGhSpAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Elasticsearch logo"\n        title=""\n        src="/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-2e2fd.png"\n        srcset="/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-b6d7a.png 240w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-bf06b.png 480w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-2e2fd.png 960w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-9ca84.png 1440w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-a1781.png 1920w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-b826e.png 2880w,\n/static/elasticsearch-066bcf7d24a6d86f02fa4857d6b8421a-230b5.png 3422w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \nI wrote a <a href="http://bosh.io">BOSH</a> release to setup the Shield and License plugins for Elasticsearch on top of the logsearch BOSH release.</p>\n<p>We deployed <a href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a> using the <a href="https://github.com/cloudfoundry-community/logsearch-boshrelease"><code>logsearch-boshrelease</code></a>, but needed to support plugins such as <a href="https://www.elastic.co/products/x-pack/security">Shield</a> and License.\nUnlike simpler plugins, Shield and License require additional configuration, in Shield\'s case multiple steps of configuration.</p>\n<p>I determined that plugin setup was out of scope for the logsearch release, so I needed to write my own.\nForking the release to add plugin support was an option, but I wanted to ensure we could still use upstream updates to Elasticsearch.\nPlugin setup is mostly out-of-band with Elasticsearch setup, except the need to restart Elasticsearch.</p>\n<p>Shield adds support for authorization and SSL to Elasticsearch, and we needed both features to keep patient information protected and encrypted at all times.\nAuthorization was fairly straightforward, but SSL was a bear.\nElastic support helped me figure out nuances of Java SSL setup and Elasticsearch\'s needs specifically.</p>',fields:{project:{title:"elasticsearch-plugins-boshrelease",subtitle:"BOSH Release for Elasticsearch plugins: Shield and License",status:"contracted",createdAtTimestamp:"2016-02-23T00:00:00.000Z",createdAt:"February 2016",deployedUrl:null,endedAtTimestamp:"2016-06-15T00:00:00.000Z",endedAt:"June 2016",sourceUrl:"https://github.com/onemedical/elasticsearch-plugins-boshrelease"}}},site:{siteMetadata:{title:"Adam Stegman"}}},pathContext:{slug:"/projects/elasticsearch-plugins-boshrelease"}}}});
//# sourceMappingURL=path---projects-elasticsearch-plugins-boshrelease-7823c0c681387fab9138.js.map