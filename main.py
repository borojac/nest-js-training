import os

apps = ['./api-gateway', './cart-service',
        './order-service', './product-service']

services = ['cart', 'order', 'product']

for serviceName in services:
    destDirs = [f"{s}/{serviceName}" for s in apps] + \
        [f"{s}/dist/{serviceName}" for s in apps]

    serviceLines = open(f"./protoFiles/{serviceName}.proto", 'r').readlines()

    for destDir in destDirs:
        if not os.path.exists(destDir):
            os.makedirs(destDir)
        f = open(f"{destDir}/{serviceName}.proto", 'w')

        f.writelines(serviceLines)
        f.close()
