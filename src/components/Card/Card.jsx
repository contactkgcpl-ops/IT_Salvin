const Card = ({ as: Component = 'article', className = '', children, ...props }) => (
  <Component className={className} {...props}>
    {children}
  </Component>
)

export default Card
