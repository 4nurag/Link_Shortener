# Generated by Django 5.0.7 on 2024-08-09 07:00

import linkshortener.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linkshortener', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mylink',
            name='hash',
            field=models.CharField(default=linkshortener.utils.generate_unique_hash, max_length=50, unique=True),
        ),
    ]
