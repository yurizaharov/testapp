resources:
  - ../../base
images:
  - name: testapp_image
    newName: registry.0zh.ru/REPOSITORY/testapp
    newTag: CONTAINER_TAG
namespace: testapp-test
configMapGenerator:
  - name: testapp-config
    envs:
      - test.properties
      - ../../vars/APP_VERSION.properties
patches:
  - target:
      group: networking.k8s.io
      version: v1
      kind: Ingress
      name: testapp
    path: patch-ingress.yaml
  - target:
      group: apps
      version: v1
      kind: Deployment
      name: testapp
    path: patch-deployment.yaml