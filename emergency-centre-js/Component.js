class Component {
  activate() {
    throw Error("this is abstract class");
  }
}

module.exports = { Component };
