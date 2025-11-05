# Marketplace Description for VS Code Extension Store

## Short Description (package.json)
Automatically generate Clean Architecture folder structures with MVN pattern and Riverpod for Flutter projects. Save time and maintain consistent architecture.

---

## Full Description (for Marketplace)

### 🚀 **Clean Architecture and MVN with RiverPod**

Speed up your Flutter development by automatically generating feature-based folder structures following Clean Architecture principles with MVN (Model-View-Notifier) pattern and Riverpod state management.

### ✨ **Key Features**

**🎯 One-Click Structure Generation**
- Generate complete feature folder structures with a single right-click
- No more manual folder creation and file setup
- Consistent architecture across your entire project

**📁 Complete Clean Architecture Support**
- **Domain Layer**: Entities, repositories, and use cases
- **Data Layer**: Models, repository implementations, and data sources
- **Presentation Layer**: Notifiers, states, views, and widgets

**🔧 Smart File Templates**
- Pre-configured Dart files with proper imports
- Ready-to-use class templates following MVN pattern
- Automatically generated file names using your feature name

**⚡ Riverpod Integration**
- Built-in support for Riverpod notifiers and states
- Proper state management structure from the start
- MVN pattern implementation out of the box

### 🎨 **How It Works**

1. **Right-click** on any folder in your Flutter project
2. Select **"🌊Create: MVN Folder Structure"** from the context menu
3. Enter your feature name (e.g., `user_profile`, `product_list`)
4. The extension automatically creates:
   - Complete folder structure
   - All necessary files with proper naming
   - Basic templates ready for implementation

### 📂 **Generated Structure**

```
features/
└── ${feature}/
    ├── domain/
    │   ├── entities/
    │   ├── repositories/
    │   └── usecases/
    ├── data/
    │   ├── models/
    │   ├── repositories/
    │   └── sources/
    └── presentation/
        ├── notifier/
        ├── state/
        ├── view/
        └── widget/
```

### 💡 **Why Use This Extension?**

- **Save Time**: No more manual folder structure creation
- **Consistency**: Maintain the same architecture across all features
- **Best Practices**: Follow Clean Architecture and MVN patterns from day one
- **Riverpod Ready**: Built-in support for Riverpod state management
- **Zero Configuration**: Works out of the box with sensible defaults

### 🎓 **Perfect For**

- Flutter developers using Clean Architecture
- Teams following MVN pattern
- Projects using Riverpod for state management
- Developers who want consistent project structure

### 📝 **Requirements**

- Flutter project
- VS Code 1.92.0 or higher

### 🔗 **Usage Example**

1. Create a new feature folder in your Flutter project
2. Right-click on the folder
3. Select "Create: MVN Folder Structure"
4. Enter feature name like `authentication`
5. Get a complete structure with all necessary files!

---

**Start building better Flutter apps with Clean Architecture today!** 🎉

