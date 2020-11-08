using Newtonsoft.Json;
using System;
using System.Linq;
using System.Text;

namespace Express.Shared.Extensions
{
    public static class StringExtension
    {
        public static T GetModelFromJson<T>(this string source)
        {
            if (source.IsNullOrWhiteSpace()) return default;
            var result = JsonConvert.DeserializeObject<T>(source, SerializerSettings.JsonSettings);
            return result;
        }

        public static T GetModelFromJson<T>(this string source, JsonSerializerSettings settings)
        {
            if (source.IsNullOrWhiteSpace()) return default;
            var result = JsonConvert.DeserializeObject<T>(source, settings);
            return result;
        }

        public static byte[] GetBytes(this string source, string encoding = "UTF8")
        {
            if (source.IsNullOrWhiteSpace()) return Array.Empty<byte>();
            switch (encoding)
            {
                case "UTF8":
                    return Encoding.UTF8.GetBytes(source);

                case "UTF7":
                    return Encoding.UTF7.GetBytes(source);

                case "ASCII":
                    return Encoding.ASCII.GetBytes(source);

                default:
                    return Encoding.UTF8.GetBytes(source);
            }
        }

        public static byte[] GetBytesFromBase64(this string source)
        {
            if (source.IsNullOrWhiteSpace()) return Array.Empty<byte>();
            return Convert.FromBase64String(source);
        }

        public static bool IsNullOrWhiteSpace(this string source)
        {
            var result = string.IsNullOrWhiteSpace(source);
            return result;
        }

        public static bool IsNumeric(this string source)
        {
            return source.All(char.IsDigit);
        }

        public static bool EqualsWithIgnoreCase(this string source, string value)
        {
            if (source == null) return false;
            if (value == null) return false;
            var result = source.Trim().Equals(value.Trim(), StringComparison.OrdinalIgnoreCase);
            return result;
        }

        public static bool ContainsWithIgnoreCase(this string source, string value)
        {
            if (source == null) return false;
            if (value == null) return false;
            var result = source.Trim().IndexOf(value, StringComparison.OrdinalIgnoreCase);
            return result >= 0;
        }

        public static bool StartsWithIgnoreCase(this string source, string value)
        {
            if (source == null) return false;
            if (value == null) return false;
            var result = source.Trim().StartsWith(value.Trim(), StringComparison.OrdinalIgnoreCase);
            return result;
        }

        public static bool EndsWithIgnoreCase(this string source, string value)
        {
            if (source == null) return false;
            if (value == null) return false;
            var result = source.Trim().EndsWith(value.Trim(), StringComparison.OrdinalIgnoreCase);
            return result;
        }

        public static string RemoveWhitespaceAndBreakLine(this string source)
        {
            return source?.Replace(" ", string.Empty).Replace("\r", string.Empty).Replace("\n", string.Empty);
        }
    }
}
