using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Express.Shared.Results
{
    public struct Result : IResult, IEquatable<Result>
    {
        internal Result(bool isSuccess, string message, Exception exception)
        {
            IsSuccess = isSuccess;
            IsFailure = !isSuccess;
            Message = message;
            Exception = exception;
        }

        public string Message { get; }
        public bool IsSuccess { get; }
        public bool IsFailure { get; }
        public Exception Exception { get; }

        public static Result Ok()
        {
            var result = new Result(true, message: default, exception: default);
            return result;
        }

        public static Result Ok(string message)
        {
            var result = new Result(true, message, exception: default);
            return result;
        }

        public static Result<T> Ok<T>()
        {
            var result = new Result<T>(true, message: default, value: default, exception: default);
            return result;
        }

        public static Result<T> Ok<T>(T value)
        {
            var result = new Result<T>(true, message: default, value, exception: default);
            return result;
        }

        public static Result<T> Ok<T>(string message, T value)
        {
            var result = new Result<T>(true, message, value, exception: default);
            return result;
        }

        public static Task<Result> OkAsync()
        {
            var result = new Result(true, message: default, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result> OkAsync(string message)
        {
            var result = new Result(true, message, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> OkAsync<T>()
        {
            var result = new Result<T>(true, message: default, value: default, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> OkAsync<T>(T value)
        {
            var result = new Result<T>(true, message: default, value, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> OkAsync<T>(string message, T value)
        {
            var result = new Result<T>(true, message, value, exception: default);
            return Task.FromResult(result);
        }

        public static Result Fail(Exception exception)
        {
            var result = new Result(false, exception.Message, exception);
            return result;
        }

        public static Result Fail(string message)
        {
            var result = new Result(false, message, exception: default);
            return result;
        }

        public static Result Fail(string message, Exception exception)
        {
            var result = new Result(false, message, exception);
            return result;
        }

        public static Result<T> Fail<T>(Exception exception)
        {
            var result = new Result<T>(false, exception.Message, value: default, exception);
            return result;
        }

        public static Result<T> Fail<T>(string message)
        {
            var result = new Result<T>(false, message, value: default, exception: default);
            return result;
        }

        public static Result<T> Fail<T>(string message, Exception exception)
        {
            var result = new Result<T>(false, message, value: default, exception);
            return result;
        }

        public static Result<T> Fail<T>(string message, T value)
        {
            var result = new Result<T>(false, message, value, exception: default);
            return result;
        }

        public static Result<T> Fail<T>(string message, T value, Exception exception)
        {
            var result = new Result<T>(false, message, value, exception);
            return result;
        }

        public static Task<Result> FailAsync(Exception exception)
        {
            var result = new Result(false, exception.Message, exception);
            return Task.FromResult(result);
        }

        public static Task<Result> FailAsync(string message)
        {
            var result = new Result(false, message, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result> FailAsync(string message, Exception exception)
        {
            var result = new Result(false, message, exception);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> FailAsync<T>(Exception exception)
        {
            var result = new Result<T>(false, exception.Message, value: default, exception);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> FailAsync<T>(string message)
        {
            var result = new Result<T>(false, message, value: default, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> FailAsync<T>(string message, Exception exception)
        {
            var result = new Result<T>(false, message, value: default, exception);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> FailAsync<T>(string message, T value)
        {
            var result = new Result<T>(false, message, value, exception: default);
            return Task.FromResult(result);
        }

        public static Task<Result<T>> FailAsync<T>(string message, T value, Exception exception)
        {
            var result = new Result<T>(false, message, value, exception);
            return Task.FromResult(result);
        }

        public bool Equals(Result other)
        {
            return Message == other.Message &&
                   IsSuccess == other.IsSuccess &&
                   IsFailure == other.IsFailure;
        }

        public override bool Equals(object obj)
        {
            return obj is Result result && Equals(result);
        }

        public override int GetHashCode()
        {
            var hashCode = -343088562;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Message);
            hashCode = hashCode * -1521134295 + IsSuccess.GetHashCode();
            hashCode = hashCode * -1521134295 + IsFailure.GetHashCode();
            return hashCode;
        }

        public static bool operator ==(Result left, Result right)
        {
            return left.Equals(right);
        }

        public static bool operator !=(Result left, Result right)
        {
            return !(left == right);
        }
    }

    public struct Result<T> : IResult<T>, IEquatable<Result<T>>
    {
        internal Result(bool isSuccess, string message, T value, Exception exception)
        {
            IsSuccess = isSuccess;
            IsFailure = !isSuccess;
            Message = message;
            Value = value;
            Exception = exception;
        }

        public string Message { get; }
        public T Value { get; }
        public bool IsSuccess { get; }
        public bool IsFailure { get; }
        public Exception Exception { get; }

        public bool Equals(Result<T> other)
        {
            return Message == other.Message &&
                   EqualityComparer<T>.Default.Equals(Value, other.Value) &&
                   IsSuccess == other.IsSuccess &&
                   IsFailure == other.IsFailure;
        }

        public override bool Equals(object obj)
        {
            return obj is Result<T> result && Equals(result);
        }

        public override int GetHashCode()
        {
            var hashCode = -1428352672;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Message);
            hashCode = hashCode * -1521134295 + EqualityComparer<T>.Default.GetHashCode(Value);
            hashCode = hashCode * -1521134295 + IsSuccess.GetHashCode();
            hashCode = hashCode * -1521134295 + IsFailure.GetHashCode();
            return hashCode;
        }

        public static bool operator ==(Result<T> left, Result<T> right)
        {
            return left.Equals(right);
        }

        public static bool operator !=(Result<T> left, Result<T> right)
        {
            return !(left == right);
        }
    }
}
