# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-17 05:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopplus', '0007_item_sale_num'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='original_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=18, null=True, verbose_name='\u539f\u4ef7'),
        ),
    ]