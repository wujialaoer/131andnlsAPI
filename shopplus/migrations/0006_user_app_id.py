# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-17 05:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopplus', '0005_cvsconfig'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='app_id',
            field=models.IntegerField(blank=True, null=True, verbose_name='\u54ea\u4e2a\u95e8\u5e97\u7684\u7528\u6237'),
        ),
    ]
