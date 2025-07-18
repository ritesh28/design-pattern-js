![Design Patterns](./Design%20Patterns.png)

**Design patterns** are typical solutions to common problems in software design.

Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

Total: `23` Design patterns

Grouping of Design Patterns:

- **Behavioral pattern (11)**: These patterns focus on object interaction and communication, describing how objects collaborate to achieve specific tasks.
- **Structural pattern (7)**: These patterns deal with how classes and objects are composed to form larger structures, focusing on relationships and compositions.
- **Creational patterns (5)**: These patterns focus on object creation mechanisms, providing ways to create objects in a flexible and efficient manner.

### Behavioral Design Pattern

| Name                    | Description                                                                                                                                                    | Image | Code |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---- |
| Chain of Responsibility | Avoids coupling the sender of a request to its receiver by giving multiple objects a chance to handle the request.                                             |       |      |
| Command                 | Encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queueing of requests, and un-doable operations. |       |      |
| Interpreter             | Defines a representation for a grammar along with an interpreter that uses the representation to interpret sentences in the language.                          |       |      |
| Iterator                | Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.                                      |       |      |
| Mediator                | Defines an object that encapsulates how a set of objects interact.                                                                                             |       |      |
| Memento                 | Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.                  |       |      |
| Observer                | Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.             |       |      |
| State                   | Allows an object to alter its behavior when its internal state changes.                                                                                        |       |      |
| Strategy                | Defines a family of algorithms, encapsulates each one, and makes them interchangeable.                                                                         |       |      |
| Template Method         | Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses.                                                                      |       |      |
| Visitor                 | Represents an operation to be performed on the elements of an object structure.                                                                                |       |      |

### Structural Design Pattern

| Name      | Description                                                                              | Image | Code |
| --------- | ---------------------------------------------------------------------------------------- | ----- | ---- |
| Adapter   | Converts the interface of a class into another interface clients expect.                 |       |      |
| Bridge    | Separates an abstraction from its implementation so that the two can vary independently. |       |      |
| Composite | Composes objects into tree structures to represent part-whole hierarchies.               |       |      |
| Decorator | Dynamically adds responsibilities to an object.                                          |       |      |
| Facade    | Provides a simplified interface to a complex system of classes.                          |       |      |
| Flyweight | Uses sharing to support a large number of fine-grained objects efficiently.              |       |      |
| Proxy     | Provides a surrogate or placeholder for another object to control access to it.          |       |      |

### Creational Design Pattern

| Name             | Description                                                                                                              | Image | Code                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ | ----- | ------------------------------------- |
| Singleton        | Ensures a class has only one instance and provides a global point of access to it.                                       |       | [Code](23-creational-singleton)       |
| Factory Method   | Defines an interface for creating objects, but lets subclasses decide which class to instantiate.                        |       | [Code](20-creational-factoryMethod)   |
| Abstract Factory | Provides an interface for creating families of related or dependent objects without specifying their concrete classes.   |       | [Code](21-creational-abstractFactory) |
| Builder          | Separates the construction of a complex object from its representation.                                                  |       | [Code](22-creational-builder)         |
| Prototype        | Specifies the kind of objects to create using a prototypical instance and creates new objects by cloning this prototype. |       | [Code](19-creational-prototype)       |

# TODO

- Behavioral - Interpreter
- Add Image ad code to the tables
