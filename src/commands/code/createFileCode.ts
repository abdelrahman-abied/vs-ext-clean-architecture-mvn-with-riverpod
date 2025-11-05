export function createFile(featureNameSnake: string, classNamePrefix: string) {
    const files = [
        { name: `data/repositories/${featureNameSnake}_repository_impl.dart`, content: `// TODO: Implement the repository for ${classNamePrefix} feature.\nimport '../../domain/repositories/${featureNameSnake}_repository.dart';\n\nclass ${classNamePrefix}RepositoryImpl implements ${classNamePrefix}Repository {}` },
        { name: `data/models/${featureNameSnake}_request.dart`, content: `// TODO: Define the Request for ${classNamePrefix} feature.\nclass ${classNamePrefix}Request {}` },
        { name: `data/models/${featureNameSnake}_response.dart`, content: `// TODO: Define the Response for ${classNamePrefix} feature.\nclass ${classNamePrefix}Response {}` },
        { name: `data/sources/${featureNameSnake}_source.dart`, content: `// TODO: Implement the source for ${classNamePrefix} feature.\nclass ${classNamePrefix}Source {}` },
        { name: `domain/entities/${featureNameSnake}_entity.dart`, content: `// TODO: Define the entity for ${classNamePrefix} feature.\nclass ${classNamePrefix}Entity {}` },
        { name: `domain/repositories/${featureNameSnake}_repository.dart`, content: `// TODO: Define the repository interface for ${classNamePrefix} feature.\nabstract class ${classNamePrefix}Repository {}` },
        { name: `domain/usecases/${featureNameSnake}_usecase.dart`, content: `// TODO: Define the use case for ${classNamePrefix} feature.\nimport '../repositories/${featureNameSnake}_repository.dart';\n\nclass ${classNamePrefix}UseCase {\n  final ${classNamePrefix}Repository repository;\n\n  ${classNamePrefix}UseCase(this.repository);\n}` },
        { name: `presentation/notifier/${featureNameSnake}_notifier.dart`, content: `import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../domain/entities/${featureNameSnake}_entity.dart';



part '${featureNameSnake}_notifier.g.dart';



@riverpod

class ${classNamePrefix} extends _\$${classNamePrefix} {

  @override

  Future<${classNamePrefix}Entity> build() async {

    // TODO: Implement your initial data fetching logic here.

    // For example, fetch data from an API.

    return const ${classNamePrefix}Entity();

  }



  // TODO: Add methods to update the state.

  // For example:

  // Future<void> updateUser(String newName) async {

  //   state = const AsyncValue.loading();

  //   state = await AsyncValue.guard(() async {

  //     // Perform async operation

  //     return state.value!.copyWith(name: newName);

  //   });

  // }

}
` },
        { name: `presentation/state/${featureNameSnake}_state.dart`, content: `import '../../domain/entities/${featureNameSnake}_entity.dart';

sealed class ${classNamePrefix}State {}

class ${classNamePrefix}StateLoading extends ${classNamePrefix}State {}

class ${classNamePrefix}StateEmpty extends ${classNamePrefix}State {}

class ${classNamePrefix}StateError extends ${classNamePrefix}State {
  final String message;
  
  ${classNamePrefix}StateError(this.message);
}

class ${classNamePrefix}StateSuccess extends ${classNamePrefix}State {
  final ${classNamePrefix}Entity data;
  
  ${classNamePrefix}StateSuccess(this.data);
}
` },
        { name: `presentation/view/${featureNameSnake}_view.dart`, content: `// TODO: Implement the View for ${classNamePrefix} feature.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}View extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('${classNamePrefix} View'),\n      ),\n      body: Center(\n        child: Text('This is the ${classNamePrefix} view'),\n      ),\n    );\n  }\n}` },
        { name: `presentation/widget/${featureNameSnake}_widget.dart`, content: `// TODO: Implement the widget for ${classNamePrefix} feature.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Widget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text('${classNamePrefix} Widget'),\n    );\n  }\n}` }
    ];

    return files;
}

