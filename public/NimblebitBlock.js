/*jshint esversion: 8 */

class NimblebitBlock {

  static GetBlock(save, key, value) {
    let separator = "[" + key + "]";
    let array = save.split(separator);
    if (array.Length = 3) {
      return array[1];
    }
    return null;
  }

  static HasBlock(save, key, value) {
    return NimblebitBlock.GetBlock(save, key, value) != null;
  }

  static Start(key, value) {
    return "[" + key + (value.ToString()) + "]";
  }

  static End(key, value) {
    return "[" + key + (value.ToString()) + "]";
  }

  static value(key, value, num) {
    return "[" + key + (num.ToString()) + "]" + value.ToString() + "[" + key + (num.ToString()) + "]";
  }
}