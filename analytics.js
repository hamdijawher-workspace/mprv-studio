// MPRV STUDIO - Analytics Integration
// PostHog Setup (replace with your project key)

(function() {
    // PostHog initialization
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="." +a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    
    // Initialize with your project key
    // Replace 'YOUR_PROJECT_KEY' with actual PostHog project key
    posthog.init('YOUR_PROJECT_KEY', {
        api_host: 'https://app.posthog.com',
        loaded: function(posthog) {
            console.log('PostHog loaded successfully');
        }
    });

    // Track all events as per PRD requirements
    window.trackEvent = function(eventName, properties = {}) {
        if (window.posthog) {
            posthog.capture(eventName, properties);
        }
        console.log('Event tracked:', eventName, properties);
    };

    // Auto-track product impressions
    function trackProductImpressions() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const productId = entry.target.dataset.productId;
                    if (productId) {
                        trackEvent('product_impression', { product_id: productId });
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Track clicks on product cards
    document.addEventListener('click', function(e) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productId = productCard.dataset.productId;
            if (productId) {
                trackEvent('product_card_click', { 
                    product_id: productId,
                    placement: 'grid'
                });
            }
        }
    });

    // Initialize tracking when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackProductImpressions);
    } else {
        trackProductImpressions();
    }
})();
