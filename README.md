# 📁 Clean Architecture and MVN with RiverPod

**Clean Architecture and MVN with RiverPod** is a VSCode extension for Flutter projects that automatically generates feature-based folder structures and basic files. It simplifies the initial project setup.

## Features

- **Automatic Folder Structure Generation**: Enter a feature name and the related folders and files will be automatically generated.
- **Basic File Generation**: Various files such as models, repositories, and widgets are created with basic templates.
- **Easy to Use**: You can easily generate folder structures.

## How to Use

1. **Install the Extension**: Install "Clean Architecture and MVN with RiverPod" from the VSCode marketplace.
2. **Right-click on a Folder**: Right-click on a folder at the desired location in your project.
3. **Generate Folder and File Structure**: Select "Create Feature Folder Structure" and enter a feature name. A folder and file structure following Clean Architecture will be generated.

## Generated Folder and File Structure

```
lib/
└── core/
└── features/
    ├── ${feature}/
    │   ├── domain/
    │   │   ├── entities/
    │   │   │   └── ${feature}_entity.dart
    │   │   ├── repositories/
    │   │   │   └── ${feature}_repository.dart
    │   │   ├── usecases/
    │   │       └── ${feature}_usecase.dart
    │   ├── data/
    │   │   ├── models/
    │   │   │   └── ${feature}_request.dart
    │   │   │   └── ${feature}_response.dart
    │   │   ├── repositories/
    │   │   │   └── ${feature}_repository_impl.dart
    │   │   └── sources/
    │   │       └── ${feature}_source.dart
    │   ├── presentation/
    │       ├── notifier/
    │       │   └── ${feature}_notifier.dart
    │       ├── state/
    │       │   └── ${feature}_state.dart
    │       ├── view/
    │       │   └── ${feature}_view.dart
    │       └── widget/
    │           └── ${feature}_widget.dart
```

### File Generation Guide

- **Automatically Generated Files**: Each folder contains Dart files based on the `$feature` name.
- **Templates Included**: Each file includes basic templates that reflect Riverpod, Clean Architecture, and MVN patterns. For example, files using `StatelessWidget` automatically include `import 'package:flutter/material.dart';`.

## License

This project is distributed under the Apache License. For more details, see the [LICENSE](LICENSE) file.