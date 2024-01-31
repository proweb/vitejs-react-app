export function FormElements() {
  const FormClasses = `custom wide blue`;
  return (
    <>
      <h2>Form Elements in JSX</h2>
      <form id="first-form" className={FormClasses}>
        <fieldset>
          <legend>Inputs</legend>
          <div>
            <label
              htmlFor="name" // for - replaced with htmlFor in JSX
            >
              Ваше имя:
            </label>
            <input type="text" id="name" placeholder="Иванов Иван Иванович" />
          </div>
        </fieldset>
      </form>
    </>
  );
}
