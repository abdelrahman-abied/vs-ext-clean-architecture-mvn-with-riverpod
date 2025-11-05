export function createFile(featureNameSnake: string, classNamePrefix: string) {
    const files = [
        { name: `data/repositories/${featureNameSnake}_repository_impl.dart`, content: `// TODO: Implement the repository for ${classNamePrefix} feature.\nimport '../../domain/repositories/${featureNameSnake}_repository.dart';\n\nclass ${classNamePrefix}RepositoryImpl implements ${classNamePrefix}Repository {}` },
        { name: `data/models/${featureNameSnake}_request.dart`, content: `// TODO: Define the Request for ${classNamePrefix} feature.\nclass ${classNamePrefix}Request {}` },
        { name: `data/models/${featureNameSnake}_response.dart`, content: `// TODO: Define the Response for ${classNamePrefix} feature.\nclass ${classNamePrefix}Response {}` },
        { name: `data/sources/${featureNameSnake}_source.dart`, content: `// TODO: Implement the source for ${classNamePrefix} feature.\nclass ${classNamePrefix}Source {}` },
        { name: `domain/entities/${featureNameSnake}_entity.dart`, content: `// TODO: Define the entity for ${classNamePrefix} feature.\nclass ${classNamePrefix}Entity {}` },
        { name: `domain/repositories/${featureNameSnake}_repository.dart`, content: `// TODO: Define the repository interface for ${classNamePrefix} feature.\nabstract class ${classNamePrefix}Repository {}` },
        { name: `domain/usecases/${featureNameSnake}_usecase.dart`, content: `// TODO: Define the use case for ${classNamePrefix} feature.\nimport '../repositories/${featureNameSnake}_repository.dart';\n\nclass ${classNamePrefix}UseCase {\n  final ${classNamePrefix}Repository repository;\n\n  ${classNamePrefix}UseCase(this.repository);\n}` },
        { name: `presentation/notifier/${featureNameSnake}_notifier.dart`, content: `// TODO: Implement the Notifier for ${classNamePrefix} feature.` },
        { name: `presentation/state/${featureNameSnake}_state.dart`, content: `// TODO: Define the State for ${classNamePrefix} feature.\nclass ${classNamePrefix}State {}` },
        { name: `presentation/view/${featureNameSnake}_view.dart`, content: `// TODO: Implement the View for ${classNamePrefix} feature.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}View extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('${classNamePrefix} View'),\n      ),\n      body: Center(\n        child: Text('This is the ${classNamePrefix} view'),\n      ),\n    );\n  }\n}` },
        { name: `presentation/widget/${featureNameSnake}_widget.dart`, content: `// TODO: Implement the widget for ${classNamePrefix} feature.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Widget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text('${classNamePrefix} Widget'),\n    );\n  }\n}` }
    ];

    return files;
}

