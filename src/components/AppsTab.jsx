import React from "react";

const AppsTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-light text-gray-800 mb-6">Apps</h2>
        <div className="bg-white rounded border border-gray-200 p-6">
          <p className="text-gray-600">
            Available apps will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsTab;
