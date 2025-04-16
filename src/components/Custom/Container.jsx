export default function Container({ children, className }) {
    return <div className={`container mx-auto px-40 ${className}`}>{children}</div>;
}