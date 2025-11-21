'use client'

import { useEffect, useRef } from 'react'

export default function ZohoContactForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (scriptLoadedRef.current) return
    scriptLoadedRef.current = true

    // Zoho form embed script - exact implementation from embed code
    const handleMessage = (event: MessageEvent) => {
      try {
        const evntData = event.data
        if (evntData && typeof evntData === 'string') {
          const zf_ifrm_data = evntData.split('|')
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0]
            const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + 'px'
            const container = document.getElementById('zf_div_hijxAyhT6b6XW6mV_CXZUBSfAS5GuHcadz8BgHHZEWk')
            const iframe = container?.getElementsByTagName('iframe')[0] as HTMLIFrameElement
            
            if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height
              let zf_tout = false
              
              if (zf_ifrm_data.length === 3) {
                iframe.scrollIntoView()
                zf_tout = true
              }
              
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframe.style.height = zf_ifrm_ht_nw
                  }, 500)
                } else {
                  iframe.style.height = zf_ifrm_ht_nw
                }
              }
            }
          }
        }
      } catch (e) {
        // Silent fail for message handler
      }
    }

    const initForm = () => {
      try {
        const d = document.getElementById('zf_div_hijxAyhT6b6XW6mV_CXZUBSfAS5GuHcadz8BgHHZEWk')
        if (!d || d.querySelector('iframe')) {
          return
        }

        const f = document.createElement('iframe')
        f.src = 'https://forms.zohopublic.com/improvemeinstitute/form/ExAImContactForm/formperma/hijxAyhT6b6XW6mV_CXZUBSfAS5GuHcadz8BgHHZEWk?zf_rszfm=1'
        f.style.border = 'none'
        f.style.height = '733px'
        f.style.width = '100%'
        f.style.transition = 'all 0.5s ease'
        f.setAttribute('aria-label', 'ExAIm Enquiry Form')

        d.appendChild(f)
      } catch (e) {
        console.error('Error loading Zoho form:', e)
      }
    }

    // Initialize form
    const timer = setTimeout(initForm, 100)
    
    // Add message listener
    window.addEventListener('message', handleMessage, false)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('message', handleMessage, false)
      scriptLoadedRef.current = false
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      id="zf_div_hijxAyhT6b6XW6mV_CXZUBSfAS5GuHcadz8BgHHZEWk" 
      className="w-full"
    ></div>
  )
}

