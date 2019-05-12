/*jshint esversion: 8 */

static class NimblebitBlock {

  static GetBlock(string, key, value) {
    let separator = new String[1]; {
      "[" + key + (value.ToString()) + "]"
    };
    let array = string.Split(separator);
    if (array.Length() >= 3) {
      return array[1];
    }
    return null;
  }

  static HasBlock(string, key, value) {
    return TTBlock.GetBlock(string, key, value) != null;
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




// public static class Block
// {
// 	public static string GetBlock(this string str, string key, int num = int.MinValue)
// 	{
// 		string[] separator = new string[1]
// 		{
// 			"[" + key + ((num != int.MinValue) ? num.ToString() : string.Empty) + "]"
// 		};
// 		string[] array = str.Split(separator, StringSplitOptions.None);
// 		if (array.Length >= 3)
// 		{
// 			return array[1];
// 		}
// 		return null;
// 	}

// 	public static bool HasBlock(this string str, string key, int num = int.MinValue)
// 	{
// 		return str.GetBlock(key, num) != null;
// 	}

// 	public static string Start(string key, int num = int.MinValue)
// 	{
// 		return "[" + key + ((num != int.MinValue) ? num.ToString() : string.Empty) + "]";
// 	}

// 	public static string End(string key, int num = int.MinValue)
// 	{
// 		return "[" + key + ((num != int.MinValue) ? num.ToString() : string.Empty) + "]";
// 	}

// 	public static string Val(string key, object value, int num = int.MinValue)
// 	{
// 		return "[" + key + ((num != int.MinValue) ? num.ToString() : string.Empty) + "]" + value.ToString() + "[" + key + ((num != int.MinValue) ? num.ToString() : string.Empty) + "]";
// 	}
// }
