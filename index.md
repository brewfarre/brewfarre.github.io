---
layout: minimal
title: Salut pública
nav_exclude: true
seo:
  type: Course
  name: Materials, activitats, lectures, i diapos
---

# {{ site.tagline }}
{: .mb-2 }
{{ site.description }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

Materials pel curs de salut pública i nutrició comunitària, 2020/21.

[Call Joe](https://databrew.cc/calljoe)

{% for module in site.modules %}
{{ module }}
{% endfor %}
