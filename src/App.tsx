import Button from './Components/Button'

function App() {
  return (
    <div>
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button disabled />
      <Button variant="text" disabled />
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
      <Button />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button startIcon="local_grocery_store" />
      <Button endIcon="local_grocery_store" />
      <Button endIcon="local_grocery_store" color="primary" />
    </div>
  )
}

export default App
