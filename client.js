// Initialize Supabase client
const supabase = Supabase.createClient(
  "https://wiptkbhlbzkpeeenbaqt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcHRrYmhsYnprcGVlZW5iYXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3ODYzMTMsImV4cCI6MjA2MjM2MjMxM30.RrUXR76B8LzJNj2AlQIUcuq72l6CNKftoAzPLvXGwf4"
);

// Call server-side function1
async function callFunction1() {
  try {
    const { data, error } = await supabase.functions.invoke("function1", {
      body: { input: "test input" },
    });
    if (error) throw error;
    document.getElementById("result").innerText = data.result;
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
  }
}

// Call server-side function2
async function callFunction2() {
  try {
    const { data, error } = await supabase.functions.invoke("function2", {
      body: { input: "test input" },
    });
    if (error) throw error;
    document.getElementById("result").innerText = data.result;
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
  }
}
