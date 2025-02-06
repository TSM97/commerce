export default function AdminTooltip() {
  return (
    <div className='flex gap-2 items-baseline'>
      <div className='w-2 h-2 bg-slate-200 border border-black-250 rounded-full' />
      <div className='w-4 h-4 bg-slate-200 border border-black-250 rounded-full' />
      <div className='bg-slate-200 p-3 w-[350px] h-fit border border-black-250'>
        <div className='font-bold'>
          [b] Bold Content [/b] - This is for Bold
        </div>
        <div>
          <u>[u] Underline Content [/u] - This is for Underline</u>
        </div>
        <div>
          <i>[i] Italic [/i] - This is for Italic</i>
        </div>
      </div>
    </div>
  );
}
