If you want to use Blueprint Notifications, wrap your React app in the `NotificationProvider` element. 

In your app, you can then either export your components using `withNotifications` (HOC), which gives you access to the methods `enqueueNotification` and `closeNotification`, or you can use the `useNotifications` hook.

```js
  <NotificationProvider>
    <div>My App</div>
  </NotificationProvider>
```

## HOC example

```js
  class MyComponent extends Component {
    componentDidMount(){
      this.key = this.props.enqueueNotification("Yo!");
    }
    render() {
        <p>Hi</p>
    };
  }

  export default withNotifications(MyComponent);
```


## Hook Example

```js
  const MyButton = () => {
    const { enqueueNotification, closeNotification } = useNotifications();

    const handleClick = () => {
        enqueueNotification('I love hooks');
    };

    return (
        <Button onClick={handleClick}>Show Notification</Button>
    );
  }
```
