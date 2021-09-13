import { Container } from './styles'

import { Button } from '../../components/Button'

function Home() {
  return (
    <Container>
      <h1>Buttons</h1>

      <div>
        <div>
          <code>Button</code>
          <Button />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button variant="outline" />`}</code>
          <Button variant="outline" />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button variant="text" />`}</code>
          <Button variant="text" />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button disableShadow />`}</code>
          <Button disableShadow />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button disabled />`}</code>
          <Button disabled />
        </div>
        <div>
          <code>{`<Button variant="text" disabled />`}</code>
          <Button variant="text" disabled />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button endIcon="local_grocery_store" />`}</code>
          <Button endIcon="local_grocery_store" color="primary" />
        </div>
        <div>
          <code>{`<Button startIcon="local_grocery_store" />`}</code>
          <Button startIcon="local_grocery_store" color="primary" />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button size="sm" />`}</code>
          <Button size="sm" color="primary" />
        </div>
        <div>
          <code>{`<Button size="md" />`}</code>
          <Button size="md" color="primary" />
        </div>
        <div>
          <code>{`<Button size="lg" />`}</code>
          <Button size="lg" color="primary" />
        </div>
      </div>

      <div>
        <div>
          <code>{`<Button color="default" />`}</code>
          <Button color="default" />
        </div>
        <div>
          <code>{`<Button color="primary" />`}</code>
          <Button color="primary" />
        </div>
        <div>
          <code>{`<Button color="secondary" />`}</code>
          <Button color="secondary" />
        </div>
        <div>
          <code>{`<Button color="danger" />`}</code>
          <Button color="danger" />
        </div>
      </div>
    </Container>
  )
}

export { Home }
