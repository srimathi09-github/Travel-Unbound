const LoadingButton = ({
  children,
  loading = false,
  type = "submit",
  disabled = false,
  className = ""
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={className}
    >
      {loading ? "Submitting..." : children}
    </button>
  );
};

export default LoadingButton;