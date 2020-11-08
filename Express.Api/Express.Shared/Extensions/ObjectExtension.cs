using Newtonsoft.Json;
using System;
using System.Globalization;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Xml.Serialization;

namespace Express.Shared.Extensions
{
    public static class ObjectExtension
    {
        public static string GetBase64FromJson(this object source)
        {
            var result = source.GetJson().GetBytes().GetBase64();
            return result;
        }

        public static bool GetBoolean(this object source, bool defaultValue = false)
        {
            var src = source.GetString();
            var succeed = bool.TryParse(src, out bool value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static byte[] GetBytes(this object source)
        {
            if (source == null) return default;

            var binaryFormatter = new BinaryFormatter();
            byte[] result;
            using (var ms = new MemoryStream())
            {
                binaryFormatter.Serialize(ms, source);
                result = ms.ToArray();
            }
            return result;
        }

        public static DateTime GetDateTime(this object source, string format)
        {
            var src = source.GetString();
            var value = DateTime.ParseExact(src, format, CultureInfo.InvariantCulture);
            return value;
        }

        public static DateTime GetDateTime(this object source, string format, DateTime defaultValue)
        {
            var src = source.GetString();
            var succeed = DateTime.TryParseExact(src, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static DateTime GetDateTimeExact(this object source, string format)
        {
            return GetDateTime(source, format);
        }

        public static DateTime? GetDateTimeNullable(this object source, string format)
        {
            var src = source.GetString();
            var succeed = DateTime.TryParseExact(src, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime value);
            if (!succeed) return null;
            return value;
        }

        public static decimal GetDecimal(this object source, decimal defaultValue = 0)
        {
            var src = source.GetString();
            var succeed = decimal.TryParse(src, out decimal value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static decimal GetDecimal(this object source, int precision, decimal defaultValue = 0)
        {
            var src = source.ToString();
            if (src.Contains(".")) return decimal.Parse(src, CultureInfo.InvariantCulture);

            var @value = Convert.ToInt64(src, CultureInfo.InvariantCulture);

            return (@value / Math.Pow(10, precision)).GetDecimal(defaultValue);
        }

        public static decimal GetDecimalExact(this object source)
        {
            var src = source.GetString();
            return decimal.Parse(src);
        }

        public static decimal? GetDecimalNullable(this object source)
        {
            var src = source.GetString();
            var succeed = decimal.TryParse(src, out decimal value);
            if (!succeed) return null;
            return value;
        }

        public static double GetDouble(this object source, double defaultValue = 0.0)
        {
            var src = source.GetString();
            var succeed = double.TryParse(src, out double value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static double GetDoubleExact(this object source)
        {
            var src = source.GetString();
            return double.Parse(src);
        }

        public static double? GetDoubleNullable(this object source)
        {
            var src = source.GetString();
            var succeed = double.TryParse(src, out double value);
            if (!succeed) return null;
            return value;
        }

        public static TEnum GetEnum<TEnum>(this object source, TEnum defaulValue = default) where TEnum : struct
        {
            var value = source.GetString();
            var succeed = Enum.TryParse(value, true, out TEnum result);
            if (succeed) return result;
            return defaulValue;
        }

        public static Guid GetGuid(this object source)
        {
            var src = source.GetString();
            var succeed = Guid.TryParse(src, out Guid value);
            if (!succeed) return Guid.Empty;
            return value;
        }

        public static Guid GetGuid(this object source, Guid defaultValue)
        {
            var src = source.GetString();
            var succeed = Guid.TryParse(src, out Guid value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static int GetInt(this object source, int defaultValue = 0)
        {
            var src = source.GetString();
            var succeed = int.TryParse(src, out int value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static int GetIntExact(this object source)
        {
            var src = source.GetString();
            return int.Parse(src);
        }

        public static int? GetIntNullable(this object source)
        {
            var src = source.GetString();
            var succeed = int.TryParse(src, out int value);
            if (!succeed) return null;
            return value;
        }

        public static string GetJson(this object source)
        {
            var result = JsonConvert.SerializeObject(source, SerializerSettings.JsonSettings);
            return result;
        }

        public static string GetJson(this object source, JsonSerializerSettings settings)
        {
            var result = JsonConvert.SerializeObject(source, settings);
            return result;
        }

        public static long GetLong(this object source, long defaultValue = 0)
        {
            var src = source.GetString();
            var succeed = long.TryParse(src, out long value);
            if (!succeed) return defaultValue;
            return value;
        }

        public static long GetLongExact(this object source)
        {
            var src = source.GetString();
            return long.Parse(src);
        }

        public static long? GetLongNullable(this object source)
        {
            var src = source.GetString();
            var succeed = long.TryParse(src, out long value);
            if (!succeed) return null;
            return value;
        }

        public static string GetString(this object source, string defaulValue = "")
        {
            if (source == null) return defaulValue;
            var result = source.ToString();
            return result;
        }

        public static string GetXML(this object source)
        {
            if (source == null) throw new ArgumentNullException(nameof(source));
            var xml = string.Empty;
            using (var sw = new StringWriter())
            {
                var xs = new XmlSerializer(source.GetType());
                xs.Serialize(sw, source);

                xml = sw.GetString();
            }

            return xml;
        }

        public static bool IsDefined<TEnum>(this object source) where TEnum : struct
        {
            var defined = Enum.IsDefined(typeof(TEnum), source);
            return defined;
        }
    }
}
