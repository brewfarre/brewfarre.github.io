---
layout: minimal
title: Salut pública
nav_exclude: true
seo:
  type: Course
  name: Salut pública i nutrició comunitària
---

# {{ site.tagline }}
{: .mb-2 }
{{ site.description }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

Materials pel curs de salut pública i nutrició comunitària, 2020/21

{% for module in site.modules %}
{{ module }}
{% endfor %}
