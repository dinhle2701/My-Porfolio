export default function Container({ children, className }) {
    return <div className={`container mx-auto sm:px-6 lg:px-28 ${className}`}>{children}</div>;
}