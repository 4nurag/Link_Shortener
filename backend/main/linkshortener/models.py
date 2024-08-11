from django.db import models
from .import utils

class MyLink(models.Model):
    source_link = models.CharField(max_length=300)
    hash = models.CharField(max_length=50, default=utils.generate_unique_hash, unique=True)

    def __str__(self):
        return self.hash

