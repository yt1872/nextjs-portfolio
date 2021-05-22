function TextField({ placeholder, rows }) {
  return (
    <div className="mb-3">
      <div className="text-xs bg-transparent pb-1 pl-1">
        {placeholder}
        <i className="text-red-600">*</i>
      </div>
      <textarea
        rows={rows}
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-md p-2 focus:outline-none "
      />
    </div>
  );
}

export default TextField;
